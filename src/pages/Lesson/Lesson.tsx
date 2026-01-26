import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { lessons } from '../../content/lessons';
import { useUserStore } from '../../stores/userStore';
import { useAudio } from '../../hooks/useAudio';

type LessonPhase = 'intro' | 'vocabulary' | 'quiz' | 'complete';

export function Lesson() {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const { play } = useAudio();

  const lesson = lessons.find((l) => l.id === lessonId);
  const [phase, setPhase] = useState<LessonPhase>('intro');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const addStars = useUserStore((state) => state.addStars);
  const completeLesson = useUserStore((state) => state.completeLesson);

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Aula não encontrada</p>
      </div>
    );
  }

  const handleIntroComplete = () => {
    setPhase('vocabulary');
  };

  const handleWordClick = (audioUrl: string) => {
    play(audioUrl);
    setTimeout(() => {
      if (currentWordIndex < lesson.words.length - 1) {
        setCurrentWordIndex(currentWordIndex + 1);
      } else {
        setPhase('quiz');
      }
    }, 1500);
  };

  const handleQuizAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
      play('/audio/effects/correct.mp3');
    } else {
      play('/audio/effects/try-again.mp3');
    }

    setTimeout(() => {
      if (quizIndex < lesson.quiz.length - 1) {
        setQuizIndex(quizIndex + 1);
      } else {
        const earnedStars = Math.ceil((correctAnswers / lesson.quiz.length) * 3);
        addStars(earnedStars);
        completeLesson(lesson.id);
        setPhase('complete');
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <button onClick={() => navigate('/trail')} className="text-3xl">
          ←
        </button>
        <h2 className="text-xl font-bold text-hola-blue">{lesson.title}</h2>
        <div className="w-8" />
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-3 mb-8">
        <div
          className="bg-hola-orange h-3 rounded-full transition-all"
          style={{
            width: `${
              phase === 'intro'
                ? 10
                : phase === 'vocabulary'
                ? 10 + (currentWordIndex / lesson.words.length) * 40
                : phase === 'quiz'
                ? 50 + (quizIndex / lesson.quiz.length) * 40
                : 100
            }%`,
          }}
        />
      </div>

      <AnimatePresence mode="wait">
        {/* Intro Phase */}
        {phase === 'intro' && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center"
          >
            <div className="text-8xl mb-6 animate-float">{lesson.icon}</div>
            <h1 className="text-3xl font-bold text-hola-blue mb-4">
              {lesson.title}
            </h1>
            <p className="text-xl text-gray-600 text-center mb-8">
              {lesson.description}
            </p>
            <button onClick={handleIntroComplete} className="btn-primary">
              Vamos lá!
            </button>
          </motion.div>
        )}

        {/* Vocabulary Phase */}
        {phase === 'vocabulary' && (
          <motion.div
            key={`vocab-${currentWordIndex}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="flex flex-col items-center"
          >
            <button
              onClick={() => handleWordClick(lesson.words[currentWordIndex].audio)}
              className="vocabulary-card w-64"
            >
              <img
                src={lesson.words[currentWordIndex].image}
                alt={lesson.words[currentWordIndex].spanish}
                className="w-40 h-40 object-contain"
              />
              <span className="mt-4 text-3xl font-bold text-hola-blue">
                {lesson.words[currentWordIndex].spanish}
              </span>
              <span className="text-lg text-gray-500">
                ({lesson.words[currentWordIndex].portuguese})
              </span>
            </button>
            <p className="mt-6 text-gray-500">Toque para ouvir!</p>
          </motion.div>
        )}

        {/* Quiz Phase */}
        {phase === 'quiz' && (
          <motion.div
            key={`quiz-${quizIndex}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col items-center"
          >
            <p className="text-xl mb-4">Qual é o animal?</p>
            <div className="text-6xl mb-6">
              {lesson.quiz[quizIndex].image}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {lesson.quiz[quizIndex].options.map((option, i) => (
                <button
                  key={i}
                  onClick={() =>
                    handleQuizAnswer(option === lesson.quiz[quizIndex].correct)
                  }
                  className="bg-white px-6 py-4 rounded-2xl shadow-lg text-xl font-bold
                           hover:bg-hola-yellow transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Complete Phase */}
        {phase === 'complete' && (
          <motion.div
            key="complete"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center"
          >
            <div className="text-8xl mb-6">🎉</div>
            <h1 className="text-3xl font-bold text-hola-green mb-4">
              Parabéns!
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Você completou a aula!
            </p>
            <div className="flex gap-2 mb-8">
              {[1, 2, 3].map((star) => (
                <span
                  key={star}
                  className={`text-5xl ${
                    star <= Math.ceil((correctAnswers / lesson.quiz.length) * 3)
                      ? 'text-hola-yellow'
                      : 'text-gray-300'
                  }`}
                >
                  ⭐
                </span>
              ))}
            </div>
            <button onClick={() => navigate('/trail')} className="btn-primary">
              Continuar
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

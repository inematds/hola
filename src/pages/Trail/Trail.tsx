import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../stores/userStore';
import { lessons } from '../../content/lessons';

export function Trail() {
  const navigate = useNavigate();
  const completedLessons = useUserStore((state) => state.completedLessons);
  const stars = useUserStore((state) => state.stars);

  const isLessonUnlocked = (index: number) => {
    if (index === 0) return true;
    return completedLessons.includes(lessons[index - 1].id);
  };

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={() => navigate('/')}
          className="text-3xl"
        >
          ←
        </button>
        <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow">
          <span className="text-2xl">⭐</span>
          <span className="text-xl font-bold text-hola-orange">{stars}</span>
        </div>
      </div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-center text-hola-blue mb-8"
      >
        Trilha dos Animais
      </motion.h1>

      {/* Trail Path */}
      <div className="flex flex-col items-center gap-6">
        {lessons.map((lesson, index) => {
          const unlocked = isLessonUnlocked(index);
          const completed = completedLessons.includes(lesson.id);

          return (
            <motion.button
              key={lesson.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => unlocked && navigate(`/lesson/${lesson.id}`)}
              disabled={!unlocked}
              className={`
                w-24 h-24 rounded-full flex items-center justify-center
                text-4xl shadow-lg transition-all
                ${completed
                  ? 'bg-hola-green text-white'
                  : unlocked
                    ? 'bg-hola-orange text-white hover:scale-110'
                    : 'bg-gray-300 text-gray-400'
                }
              `}
            >
              {completed ? '✓' : unlocked ? lesson.icon : '🔒'}
            </motion.button>
          );
        })}
      </div>

      {/* Progress */}
      <div className="mt-12 text-center">
        <p className="text-gray-600">
          Progresso: {completedLessons.length} / {lessons.length} aulas
        </p>
        <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
          <div
            className="bg-hola-green h-4 rounded-full transition-all"
            style={{ width: `${(completedLessons.length / lessons.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}

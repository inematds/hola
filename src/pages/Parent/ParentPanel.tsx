import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../stores/userStore';
import { lessons } from '../../content/lessons';

export function ParentPanel() {
  const navigate = useNavigate();
  const stars = useUserStore((state) => state.stars);
  const completedLessons = useUserStore((state) => state.completedLessons);

  const completedWords = lessons
    .filter((l) => completedLessons.includes(l.id))
    .flatMap((l) => l.words);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => navigate('/')} className="text-3xl">
          ←
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Área dos Pais</h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow">
          <p className="text-gray-500 text-sm">Estrelas</p>
          <p className="text-4xl font-bold text-hola-orange">{stars} ⭐</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow">
          <p className="text-gray-500 text-sm">Aulas Completas</p>
          <p className="text-4xl font-bold text-hola-green">
            {completedLessons.length}/{lessons.length}
          </p>
        </div>
      </div>

      {/* Progress */}
      <div className="bg-white rounded-2xl p-6 shadow mb-8">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Progresso</h2>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
          <div
            className="bg-hola-green h-4 rounded-full transition-all"
            style={{
              width: `${(completedLessons.length / lessons.length) * 100}%`,
            }}
          />
        </div>
        <p className="text-gray-500 text-sm">
          {Math.round((completedLessons.length / lessons.length) * 100)}% do
          Nível 1 concluído
        </p>
      </div>

      {/* Learned Words */}
      <div className="bg-white rounded-2xl p-6 shadow">
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          Palavras Aprendidas ({completedWords.length})
        </h2>
        {completedWords.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {completedWords.map((word, i) => (
              <span
                key={i}
                className="bg-hola-yellow/20 text-gray-800 px-3 py-1 rounded-full text-sm"
              >
                {word.spanish}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">
            Nenhuma palavra aprendida ainda. Incentive seu filho(a) a começar!
          </p>
        )}
      </div>

      {/* Reset (for testing) */}
      <button
        onClick={() => {
          useUserStore.getState().reset();
          navigate('/');
        }}
        className="mt-8 text-red-500 text-sm underline"
      >
        Reiniciar progresso (teste)
      </button>
    </div>
  );
}

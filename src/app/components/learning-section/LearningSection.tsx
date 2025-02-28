const LearningSection = () => {
    return (
      <section
        className="w-full px-4 sm:px-6 lg:px-8 py-20 text-center h-auto min-h-screen flex flex-col items-center justify-around z-48 bg-white shadow-lg rounded-[0%_0%_30%_30%_/_30%_30%_40px_40px] 
        sm:rounded-[0%_0%_40%_40%_/_40%_40%_50px_50px] 
        md:rounded-[0%_0%_50%_50%_/_50%_50%_70px_70px]  -mt-[67px]  relative"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in text-[var(--color-text-gray)] !pt-[67px] !pb-[67px] sm:pt-0 sm:pb-0">
          Постоянное обучение
        </h1>
        <p className="text-lg sm:text-xl text-[var(--color-text-primary)] mb-8 animate-fade-in-delay">
          Мы предлагаем широкий спектр образовательных программ для повышения квалификации и профессионального роста.
        </p>
        <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Add content for the learning section here */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">Курс 1</h2>
            <p className="text-gray-700">Описание курса 1.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">Курс 2</h2>
            <p className="text-gray-700">Описание курса 2.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">Курс 3</h2>
            <p className="text-gray-700">Описание курса 3.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default LearningSection;
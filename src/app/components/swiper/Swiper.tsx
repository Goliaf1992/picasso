import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const reviews = [
  {
    name: "Дмитрий Иванов",
    review:
      "Работаю челюстно-лицевым хирургом более 10 лет. Недавно ко мне обратился пациент с тяжелой атрофией костной ткани. Использование хирургического шаблона позволило мне выполнить операцию без разрезов, что сократило время вмешательства на 40% и ускорило заживление. Пациент был в восторге, а я убедился, что технологии действительно меняют медицину!",
    avatar: "/pics/doctors/maledoc.jpg",
  },
  {
    name: "Екатерина Смирнова",
    review:
      "В моей практике ортопеда-имплантолога точность играет ключевую роль. Один из пациентов потерял несколько зубов из-за травмы, и стандартные методы планирования не давали нужного результата. Использование хирургического шаблона позволило идеально спозиционировать импланты, снизив риск осложнений. Теперь рекомендую эти технологии всем коллегам!",
    avatar: "/pics/doctors/femaledoc.jpg",
  },
  {
    name: "Алексей Козлов",
    review:
      "Недавно провел сложную реабилитацию пациента с полной адентией. Без хирургического шаблона установка имплантов заняла бы вдвое больше времени, а риск ошибок значительно возрос. Благодаря шаблону я установил 6 имплантов с точностью до долей миллиметра, что позволило создать комфортный и эстетичный протез. Пациент быстро адаптировался, и уже через неделю вернулся к привычной жизни!",
    avatar: "/pics/doctors/maledoc2.jpg",
  },
];

const MySwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      className="w-full max-w-3xl bg-white rounded-xl"
    >
      {reviews.map((doctor, index) => (
        <SwiperSlide key={index}>
          <div className=" text-black p-11 rounded-lg  flex flex-col items-center text-center h-fit">
            <img
              src={doctor.avatar}
              alt={doctor.name}
              className="w-1/3 h-1/2 rounded-full mb-4"
            />
            <p className="text-lg font-semibold">{doctor.name}</p>
            <p className="text-sm text-gray-600">{doctor.review}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MySwiper;

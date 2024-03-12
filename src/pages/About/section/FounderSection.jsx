import FounderImage from "../../../assets/images/demo-img.avif";

const FounderSection = () => {
  return (
    <section className="px-10 py-24">
      <div className="flex flex-col justify-center items-center gap-20 w-[75%]  m-auto">
        {/* Founder Note  */}
        <div className="flex justify-between items-center gap-[5%]  ">
          <div className="w-[45%]">
            <div>
              <h1 className="text-3xl font-bold mb-5">
                A note from the founders
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
                adipisci? dvnidd jdnvvkj sdkvk
              </p>
            </div>
            <div className="flex flex-col mt-10 gap-6">
              <div className="flex gap-5">
                <div className="bg-blue-200 rounded-full p-3 h-fit">1.</div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-semibold">
                    It all started in 2015
                  </h3>
                  <p className="leading-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo facilis laborum quas, reprehenderit, ratione
                    doloremque optio deserunt porro officia cumque veritatis
                    sunt. Totam fugiat praesentium, repellendus harum
                    consequatur hic sint.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="bg-blue-200 rounded-full p-3 h-fit">1.</div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold">
                    It all started in 2015
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo facilis laborum quas, reprehenderit, ratione
                    doloremque optio deserunt porro officia cumque veritatis
                    sunt. Totam fugiat praesentium, repellendus harum
                    consequatur hic sint.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="bg-blue-200 rounded-full p-3 h-fit">1.</div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold">
                    It all started in 2015
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo facilis laborum quas, reprehenderit, ratione
                    doloremque optio deserunt porro officia cumque veritatis
                    sunt. Totam fugiat praesentium, repellendus harum
                    consequatur hic sint.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[50%] h-[500px] rounded-lg overflow-hidden">
            <img src={FounderImage} alt="" className="h-full object-cover" />
          </div>
        </div>
        {/* Our Vision */}
        <div className="flex gap-10 justify-center items-center">
          <div className="w-[50%]">
            <img src={FounderImage} alt="" />
          </div>
          <div className="w-[50%] ">
            <h1 className="text-4xl font-semibold mb-3">
              Our vision is simple
            </h1>
            <p className="leading-7 mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              alias, itaque, eius, non voluptatem culpa sapiente saepe voluptas
              sequi hic quas cum natus laudantium qui amet ex ad. Assumenda
              nesciunt tempora quasi, maiores sint recusandae odit quos ab fuga
              maxime.
            </p>
            <h3 className="font-[600] mb-2">Ravi Kumar</h3>
            <h4>CEO at LiveArtist</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;

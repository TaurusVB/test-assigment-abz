import CustomLink from "./CustomLink";

const HeroSection = () => {
  return (
    <section className="max-w-[1200px] mx-auto mb-[140px] bg-cover bg-no-repeat h-[500px] laptop:h-[650px] bg-mobile mobile:bg-tablet tablet:bg-laptop laptop:bg-desktop flex items-center justify-center">
      <div className="w-full mx-4 text-center text-white mobile:w-[328px] tablet:w-[380px]">
        <h1 className=" text-[40px]/[40px] mb-[21px]">
          Test assignment for front-end developer
        </h1>
        <p className="mb-8">
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they`ll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <CustomLink text="Sign up" href="#signUp" />
      </div>
    </section>
  );
};

export default HeroSection;

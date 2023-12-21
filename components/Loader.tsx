import { ColorRing } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full z-50 bg-black bg-opacity-50">
      <ColorRing
        visible={true}
        height="48"
        width="48"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#00BDD3", "#00BDD3", "#00BDD3", "#00BDD3", "#00BDD3"]}
      />
    </div>
  );
};

export default Loader;

import Spinner from "../assets/spinner.svg";
const Loader = () => {
  return (
    <div className="flex items-center justify-center mt-5">
      <img src={Spinner} alt="" />
    </div>
  );
};

export default Loader;

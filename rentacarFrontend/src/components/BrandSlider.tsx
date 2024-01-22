import heroimage1 from "../images/heroimage1.png";
import heroimage2 from "../images/heroimage2.png";
function BrandSlider() {
  return (
    <div className="container mt-8">
      <div className="overflow-hidden whitespace-nowrap  bg-white">
        <div className="flex py-10 space-x-10 animate-translate">
          <img className="h-14 " src={heroimage1} alt="" />
          <img className="h-14" src={heroimage2} alt="" />
          <img className="h-14" src={heroimage2} alt="" />
          <img className="h-14" src={heroimage2} alt="" />
          <img className="h-14" src={heroimage2} alt="" />
          <img className="h-14" src={heroimage2} alt="" />
          <img className="h-14" src={heroimage2} alt="" />
          <img className="h-14" src={heroimage2} alt="" />
          <img className="h-14" src={heroimage2} alt="" />
          <img className="h-14" src={heroimage2} alt="" />
          <img className="h-14" src={heroimage2} alt="" />
          <img className="h-14" src={heroimage2} alt="" />
          <img className="h-14" src={heroimage2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default BrandSlider;

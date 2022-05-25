import React from "react";
import CustomSelect from "../utils/CustomSelect";

function MenuListCustom(props) {
  return (
    <div className={"w-full bg-blue-custom px-4 md:px-12 hidden md:flex items-center text-white justify-center  " +props.direction}>
      <CustomSelect menuName="About Us" />
      <CustomSelect menuName="Jobs" menuList={["Menu 1", "Menu 2 "]} />
      <CustomSelect menuName="Expert" />
      <CustomSelect menuName="Blog" />
      <CustomSelect menuName="Education" menuList={["Menu 1", "Menu 2 "]} />
      <CustomSelect menuName="Sea-commerce" menuList={["Menu 1", "Menu 2 "]} />
      <CustomSelect menuName="Events" menuList={["Menu 1", "Menu 2 "]} />
      <CustomSelect menuName="Tecnologic service " menuList={["Menu 1", "Menu 2 "]} />
      <CustomSelect menuName="Testimonials " />
    </div>
  );
}

export default MenuListCustom;

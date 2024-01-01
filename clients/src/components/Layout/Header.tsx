import styles from "../../utils/styles";
import NavItems from "@/src/components/NavItems";
import ProfileDropDown from "@/src/components/ProfileDropDown";

const Header = () => {
  return (
    <header className="w-full bg-[#0F1524] ">
      <div className="w-[90%] h-[80px] m-auto flex items-center justify-between">
        <h1 className={`${styles.logo}`}>Salam</h1>
        <NavItems />
        <ProfileDropDown />
      </div>
    </header>
  );
};

export default Header;

import { ColorItem } from "../../../shared/ui/ColorItem/ColorItem";

interface GraffityColors {
  changeColor: (value: string) => void;
  id: string;
}

const palette = [
  { name: "charcoal", hex: "#2c3e50" },
  { name: "cloud", hex: "#ecf0f1" },
  { name: "emerald", hex: "#2ecc71" },
  { name: "crimson", hex: "#e74c3c" },
  { name: "ocean", hex: "#3498db" },
  { name: "sunflower", hex: "#f1c40f" },
  { name: "tangerine", hex: "#e67e22" },
  { name: "amethyst", hex: "#9b59b6" },
  { name: "salmon", hex: "#fa8072" },
  { name: "mint", hex: "#a3e4d7" },
];

export const GraffityColors = (props: GraffityColors) => {
  const { changeColor, id } = props;

  return (
    <div className="colors-list" id={id}>
      {palette.map((color) => (
        <ColorItem
          key={color.name}
          color={color.hex}
          onClick={() => changeColor(color.hex)}
        />
      ))}
    </div>
  );
};

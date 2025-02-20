import Button from "../../ui/Button";

function UpdateItemQuantity() {
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round">-</Button>
      <Button type="round">+</Button>
    </div>
  );
}

export default UpdateItemQuantity;

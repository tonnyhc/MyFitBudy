import Input from "../common/input/Input";

const CustomProgramForm = ({formData, step}) => {
  return (
    <div className="mt-12 flex justify-center items-center">
      <form action="" className="text-white">
        <Input
          labelText="Name your program"
          labelName="program-name"
          inputType="text"
        />
      </form>
    </div>
  );
};

export default CustomProgramForm;

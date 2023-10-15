import Input from "../common/input/Input";

const ProgramNameForm = ({ formData, setFormData }) => {
  return (
    <div className="mt-12 flex justify-center items-center">
      <form action="" className="text-white flex gap-3 flex-col">
        <Input
          labelText="Name your program"
          labelName="planName"
          inputType="text"
          onChange={setFormData}
          value={formData.programName}
          isRequired={true}
          inputSize='xxl'
        />
        <Input
          labelText="Number of workouts"
          labelName="workoutsCount"
          inputType="number"
          onChange={setFormData}
          value={formData.workoutsCount}
          isRequired={true}
          inputSize='xxl'
        />
      </form>
    </div>
  );
};

export default ProgramNameForm;

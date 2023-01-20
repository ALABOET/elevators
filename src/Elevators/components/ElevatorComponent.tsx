import classNames from '../containers/Elevator.module.scss';
import { Button } from '@mui/material';

interface ElevatorsData {
  elevatorNumber: number,
  onElevatorCall: (elem) => void,
  floorName: string,
}
const ElevatorComponent = ({ elevatorNumber, onElevatorCall, floorName }: ElevatorsData) => {
  return (
    <div className={classNames.elevator}>
      <div className={classNames.elevator_content}>
        <div>Этаж № {elevatorNumber}</div>
        <Button
          onClick={onElevatorCall}
          variant={"contained"}
          color={"success"}
        >
            Вызвать лифт
        </Button>
          {floorName}
      </div>
    </div>
  )
}

export default ElevatorComponent

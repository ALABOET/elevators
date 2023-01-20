import classNames from '../containers/Elevator.module.scss'
import { motion } from 'framer-motion'
import { useState } from 'react';
import ElevatorComponent from '../components/ElevatorComponent';
const Elevators = () => {
  const [y, setY] = useState(0);
  const elevatorsArray = [{id: 1, floorName: 'Гостиная'}, {id: 2, floorName: 'Прачечная'}, {id: 3, floorName: 'Серверная'}, {id: 4, floorName: 'Кухня'}, {id: 5, floorName: 'Игорный зал'}];
  return (
    <div className={classNames.root}>
      <div className={classNames.elevators}>
        <motion.div
          className={classNames.box}
          animate={{ y }}
          transition={{ type: "spring", stiffness: 20 }}
        />
        {elevatorsArray.reverse().map((elem) => {
          return <ElevatorComponent
            elevatorNumber={elem.id}
            onElevatorCall={(e) => setY(e.target.offsetTop - 34)}
            floorName={elem.floorName}
          />
        })}
      </div>
    </div>
  )
}

export default Elevators

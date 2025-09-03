import './App.module.css'
import {
  Button,
  Modal,
  ModalContent,
  ModalTrigger,
  PhoneSelectField,
  RangeSlider,
  RangeSliderProgress,
  RangeSliderThumb,
  SegmentedControl,
  SegmentedControlItem,
  Slider,
  SliderProgress,
  SliderThumb,
  Text,
  TextField
} from "@vega-ui/react";
import style from './App.module.css'
import { useState } from "react";

function App() {
  const [increment, setIncrement] = useState<number>(0)
  
  return (
    <div className={style.main}>
      <Button onClick={() => setIncrement(increment + 1)}>Hello, world!</Button>
      <Text>Count: {increment}</Text>
      <Modal>
        <ModalTrigger asChild>
          <Button appearance='ghost'>
            Modal
          </Button>
        </ModalTrigger>
        <ModalContent>
          <Text size={3}>
            Hello!
          </Text>
          <Button variant="secondary">
            Agree
          </Button>
        </ModalContent>
      </Modal>
      <Slider
        style={{
          width: '400px'
        }}
      >
        <SliderProgress />
        <SliderThumb />
      </Slider>
      <RangeSlider
        style={{
          width: '400px'
        }}
      >
        <RangeSliderProgress />
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
      <PhoneSelectField
        countries={[
          {
            iso: 'AD',
            label: 'AD (+376)'
          },
          {
            iso: 'AE',
            label: 'AE (+971)'
          },
        ]}
      />
      <TextField placeholder="Name" />
      <SegmentedControl name="radio">
        <SegmentedControlItem value="1">
          SSD
        </SegmentedControlItem>
        <SegmentedControlItem value="2">
          HDD
        </SegmentedControlItem>
        <SegmentedControlItem value="3">
          NVMe
        </SegmentedControlItem>
      </SegmentedControl>
    </div>
  )
}

export default App

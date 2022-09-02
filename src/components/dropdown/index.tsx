import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  Pressable,
} from 'react-native';
import React, {FC, ReactElement, useRef, useState} from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  label: string;
  data: Array<{label: string; value: string}>;
  defaultValue: {label: string; value: string};
  onSelect: (item: {label: string; value: string}) => void;
}

const CustomDropdown: FC<Props> = ({label, data, onSelect, defaultValue}) => {
  const DropdownButton = useRef(null);
  const [visible, setVisible] = useState(false);
  const [dropdownTop, setDropdownTop] = useState(0);
  const [dropdownLeft, setDropdownLeft] = useState(0);
  const [dropdownWidth, setDropdownLWidth] = useState(100);
  const [selected, setSelected] = useState(defaultValue);

  const toggleDropdown = () => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = (): void => {
    DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py + h);
      setDropdownLeft(_px);
      setDropdownLWidth(_w);
    });
    setVisible(true);
  };

  const onItemPress = (item): void => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  const renderItem = ({item}): ReactElement<any, any> => (
    <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
      <Text>{item.label}</Text>
    </TouchableOpacity>
  );

  const renderDropdown = (): ReactElement<any, any> => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}>
          <View
            style={[
              styles.dropdown,
              {top: dropdownTop},
              {left: dropdownLeft},
              {width: dropdownWidth},
            ]}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };
  //   console.log('ds:' + defaultValue.label);

  return (
    <Pressable
      ref={DropdownButton}
      style={styles.button}
      onPress={toggleDropdown}>
      {renderDropdown()}
      <Text style={styles.buttonText}>
        {(selected && selected.label) || label}
      </Text>
      <Icon name="chevron-down" />
    </Pressable>
  );
};

export default CustomDropdown;

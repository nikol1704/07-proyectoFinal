import { useState, useEffect } from 'react';
import { useWindowDimensions } from 'react-native';

export const useOrientation = () => {
    const [isLandscape, setIsLandscape] = useState(true)

    const window = useWindowDimensions();
    const getOrientation = () => {
        if (window.height < window.width) {
            setIsLandscape(true);
        } else {
            setIsLandscape(false);
        }
        return isLandscape
    }

  useEffect(() => {
    getOrientation()
  }, [window]);

  return isLandscape;
};

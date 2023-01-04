import React, { useCallback } from "react";
import { Text, View } from "react-native";

export default function My() {
  return (
    <View>
      <Text>My</Text>
    </View>
  );
}

// useEffect는 화면을 벗어나면 return의 함수가 실행된다.

// useFoucsEffect는 useCallback의 메서드를 받고 인자는 useEffect와 똑같다.
// useFoucsEffect의 return 값은 스크린에서 벗어날 때 발생한다. 스크린을 이동하면 useEffect의 return 값이 실행되지 않고, useFoucsEffect의 return 값만 실행되는데
// 이 것은 렌더링 되었던 결과, 데이터들이 남아 있다는 뜻이다.
// reset 메서드를 사용해야 unmount 되서 useEffect return 값이 실행된다.

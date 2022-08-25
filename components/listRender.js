import { memo } from "react";

const listRender = ({ todos }) => {
  console.log("child render");
  return (
    <View style={styles.cardContainer}>
    <View>
    <Text style={styles.headerText}>
        {item.value}
    </Text>
    <Text style={styles.desText}>
        {item.text}
    </Text>
    </View>
    <View>
    {item.zones.length != 0 ?
        <Text style={styles.timeStyle}>
            {moment().tz(item.zones[0]).format("hh:mm") }
            <Text style={styles.clocktype}>
            {moment().tz(item.zones[0]).format("A") }
            </Text>
        </Text>
        : null}
    </View>
</View>
  );
};

export default memo(listRender);


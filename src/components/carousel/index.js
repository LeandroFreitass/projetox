import * as React from 'react';
import { Dimensions, Text, View,Image} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

function CarouselView() {
    const width = Dimensions.get('window').width;
    return (
        <View style={{ flex: 1 }}>
            <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={[...new Array(3).keys()]}
                scrollAnimationDuration={1000}
                renderItem={({ index }) => (
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <Image   source={require('../../../assets/mercadoexemplowebp.webp')}>
                           
                        </Image>
                    </View>
                )}
            />
        </View>
    );
}

export default CarouselView;
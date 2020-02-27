import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import AmazingCropper, {DefaultFooter} from 'react-native-amazing-cropper';

class ImageCrop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
      imgDone: false,
    };
  }

  onDone = croppedImageUri => {
    console.log('Cropped Image URI: ', croppedImageUri);
    this.setState({filePath: {uri: croppedImageUri}, imgDone: true});
  };

  onCancel = () => {
    console.log('Cancel Button was pressed');
  };

  render() {
    // var {imgURI} = this.props;
    let {imgDone} = this.state;
    return (
      <AmazingCropper
        footerComponent={
          <DefaultFooter doneText="DONE" rotateText="ROT" cancelText="CANCEL" />
        }
        onDone={this.onDone}
        onCancel={this.onCancel}
        // imageUri={imgURI}
        imageUri="https://www.lifeofpix.com/wp-content/uploads/2018/09/manhattan_-11-1600x2396.jpg"
        imageWidth={1600}
        imageHeight={2396}
        NOT_SELECTED_AREA_OPACITY={0.3}
        BORDER_WIDTH={20}
      />
    );
  }
}

export default ImageCrop;

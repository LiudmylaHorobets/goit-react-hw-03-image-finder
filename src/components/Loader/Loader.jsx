import { Component } from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';

export class MyLoader extends Component {
  render() {
    return (
      <div className="MyLoader">
        <MagnifyingGlass
          visible={true}
          height="240"
          width="240"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#3f51b5"
        />
      </div>
    );
  }
}

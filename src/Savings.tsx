import React from "react";
import Header from "./components/Header";
import styled from 'styled-components';
import { useSelector } from "react-redux";
import { RootState } from "./store";
// import { RootState } from "./store";


const SHeader = styled(Header)`
  color: white;
  background-color: #00001c;
`;

const initializeData = () => {
  const connected = useSelector((state: RootState) => state.headerData.connected);
  const address = useSelector((state: RootState) => state.headerData.address);
  const chainId = useSelector((state: RootState) => state.headerData.chainId);
  const killSession = useSelector((state: RootState) => state.headerData.killSession);
  return {connected, address, chainId, killSession};
}

class Savings extends React.Component<any, any> {

  public data: any;

  constructor(props: any) {
    super(props);
    this.data = initializeData();
  }

  public render = () => {
    return (
      <SHeader
        connected={this.data.connected}
        address={this.data.address}
        chainId={this.data.chainId}
        killSession={this.data.killSession}
      />
    );
  }
}

export default Savings;
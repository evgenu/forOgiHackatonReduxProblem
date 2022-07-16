import { createSlice } from '@reduxjs/toolkit'

const headerDataSlice = createSlice({
  name: 'headerData',
  initialState: {
    connected: null,
    address: null,
    chainId: null,
    killSession: null 
  },
  reducers: {
    setConnected: (state: any, action: any) => {
      state.connected = action.payload
    },
    setAddress: (state: any, action: any) => {
      state.connected = action.payload
    },
    setChainId: (state: any, action: any) => {
      state.chainId = action.payload
    },
    setKillSession: (state: any, action: any) => {
      state.killSession = action.payload
    }
  }
});

export const { setConnected, setAddress, setChainId, setKillSession } = headerDataSlice.actions;
export default headerDataSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

// 상품 리스트 전체를 redux로 관리
export const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    UP: (state) => {
      state.count += 1;
    },

    DOWN: (state) => {
      state.count -= 1;
    },
  },
});

export const { UP, DOWN } = counterSlice.actions;
export default counterSlice.reducer;

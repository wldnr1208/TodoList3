import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// isLoading은 서버에서 todos를 가져오는 상태를 나타내는 값, 기본은 false , 통신중은 true , error는 에러발생시 나타내는 값
const initialState = {
  todos: [],
  isLoading: false,
  isSuccess: false,
  error: null,
};

export const __getTodos = createAsyncThunk("getTodos", async (thunkAPI) => {
  try {
    const { data } = await axios.get("http://localhost:3001/todos");
    console.log(123, data);
    // return thunkAPI.fulfillWithValue(data.data);  이거 안됌
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __deleteTodo = createAsyncThunk(
  "delete_todo",
  async (id, thunkAPI) => {
    try {
      axios.delete(`http://localhost:3001/todos/${id}`);
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateTodo = createAsyncThunk(
  "update_todo",
  async (id, thunkAPI) => {
    try {
      axios.patch(`http://localhost:3001/todos/${id}`);
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  // extraReducers 추가하기
  extraReducers: {
    // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    [__getTodos.pending]: (state) => {
      state.isLoading = true;
    },
    // 네트워크 요청 끝났을 때, false로 변경
    [__getTodos.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.todos = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    // 에러발생! 네트워크 요청 끝났으니 false
    [__getTodos.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

    [__deleteTodo.fulfilled]: (state, action) => {
      const target = state.todos.findIndex(
        (body) => body.id === action.payload
      );

      state.todos.splice(target, 1);
    },
    [__deleteTodo.rejected]: () => {},
    [__deleteTodo.pending]: () => {},

    [__updateTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todo = action.payload;
    },
    [__updateTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;

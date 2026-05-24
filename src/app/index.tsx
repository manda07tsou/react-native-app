import { AppHeader } from "@/components/appHeader";
import AppText from "@/components/appText";
import { RootView } from "@/components/rootView";
import { TodoItem } from "@/components/todoItem";
import { deleteTodo, getAllTodos, initDatabase, newTodo } from "@/config/db";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { TodoItemTypes, WriteTodoType } from '@/types/todo';
import { NewTodoModal } from "@/components/newTodoModal";

export default function Index(){
  const [todos, setTodos] = useState<TodoItemTypes[]|undefined>([])

  const loadTodos = async() => {
      const res = await getAllTodos()
      setTodos(res)
  }
  useEffect(() => {
    const getTodos = async () => {
      await initDatabase()
      await loadTodos()
    }
    getTodos()
  }, [])

  const addTodo = async (todo: WriteTodoType) => {
    await newTodo(todo)
    loadTodos()
  }

  const removeTodo = async (todoId: number) => {
    await deleteTodo(todoId)
    loadTodos()
  }

  return (
    <RootView>
      <AppHeader/>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <AppText color="muted" style={{marginBottom: 10}}>Mes taches</AppText>
        <NewTodoModal onNewTodo={addTodo}/>
      </View>
        <View style={{gap: 10}}>
          <FlatList
            data={todos ?? []}
            renderItem={item => <TodoItem todo={item.item} onDeleteTodo={removeTodo}/>}
            keyExtractor={item => item.id.toString()}
          />
        </View>
    </RootView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
});

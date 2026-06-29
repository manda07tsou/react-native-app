import { AppHeader } from "@/components/appHeader";
import AppText from "@/components/appText";
import { RootView } from "@/components/rootView";
import { TodoItem } from "@/components/todoItem";
import { deleteTodo, getAllTodos, initDatabase, newTodo, searchTodos } from "@/config/db";
import { useEffect, useRef, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { TodoItemTypes, WriteTodoType } from '@/types/todo';
import { NewTodoModal } from "@/components/newTodoModal";

export default function Index(){
  const [todos, setTodos] = useState<TodoItemTypes[]>([])
  const [searchQuery, setSearchQuery] = useState<string>('')
  const searchTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const loadTodos = async (query?: string) => {
      const res = query ? await searchTodos(query) : await getAllTodos()
      setTodos(res ?? [])
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
    await loadTodos(searchQuery)
  }

  const removeTodo = async (todoId: number) => {
    await deleteTodo(todoId)
    await loadTodos(searchQuery)
  }

  const handleSearchChange = (text: string) => {
    setSearchQuery(text)
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current)
    }

    if (text.trim() === '') {
      searchTimeout.current = setTimeout(() => {
        loadTodos()
      }, 300)
      return
    }

    searchTimeout.current = setTimeout(() => {
      loadTodos(text)
    }, 300)
  }

  const handleSearchPress = async () => {
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current)
      searchTimeout.current = null
    }
    await loadTodos(searchQuery)
  }

  return (
    <RootView>
      <AppHeader
        searchValue={searchQuery}
        onSearchChange={handleSearchChange}
        onSearchPress={handleSearchPress}
      />
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

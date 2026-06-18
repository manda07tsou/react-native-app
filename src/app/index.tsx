import { AppHeader } from "@/components/appHeader";
import AppText from "@/components/appText";
import { RootView } from "@/components/rootView";
import { TodoItem } from "@/components/todoItem";
import { TodosDatas } from "@/constants/data";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Index(){
  const [todos, setTodos] = useState(TodosDatas)

  const addTodo = (todo: string) => {
    setTodos(prev => [{id: Date.now(), content: todo}, ...prev])
  }

  const removeTodo = (todoId: number) => {
    setTodos(prev => todos.filter(item => item.id !== todoId))
  }
  
  return (
    <RootView>
      <AppHeader onNewTodo={addTodo}/>
      <AppText color="muted" style={{marginBottom: 10}}>Mes taches</AppText>
      <ScrollView >
        <View style={{gap: 10}}>
          {todos.map(item => ( <TodoItem 
            key={item.id} todo={item}
            onDeleteTodo={removeTodo}
          />))}
        </View>
      </ScrollView>
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

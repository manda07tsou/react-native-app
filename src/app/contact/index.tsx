import AppText from "@/components/appText";
import { RootView } from "@/components/rootView";
import {requestPermissionsAsync, Contact, Fields} from "expo-contacts"
import { useEffect } from "react";


export default function Index(){
    useEffect(() => {
        (async () => {
            const { status } = await requestPermissionsAsync()

            if(status == "granted"){
                console.log(await Contact.getAll())
            }
        })()
    }, [])

    return <RootView>
        <AppText>Index tabs</AppText>
    </RootView>
}
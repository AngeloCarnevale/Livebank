import {NavigationContainer} from '@react-navigation/native'
import StackRoutes from './stack.navigation'


export default function Routes() {
    return(
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    )
}
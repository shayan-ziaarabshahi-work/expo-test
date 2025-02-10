import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { icons } from "./../../constants";

const TabBarIcon = ({ icon, name, color, focused }: any) => {
  return (
    <View className="justify-center items-center gap-2 mt-[20px]">
      <Image source={icon} resizeMode="contain" tintColor={color} className="w-6 h-6"/>
      <Text style={{color}} className={`${focused ? 'font-pbold' : 'font-pregular'} text-xs w-[80px] text-center text-white`}>{name}</Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ 
      headerShown: false,
       tabBarShowLabel: false,
       tabBarActiveTintColor: '#FFA001',
       tabBarInactiveTintColor: '#CDCDE0',
       tabBarStyle: {
        backgroundColor: '#161622',
        borderTopWidth: 1,
        borderTopColor: '#232533',
        height: 60,
        
       }
       }}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="Home" color={color} icon={icons.home} focused={focused}/>
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name="Create"
              color={color}
              icon={icons.plus}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: "Bookmark",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name="Bookmark"
              color={color}
              icon={icons.bookmark}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name="Profile"
              color={color}
              icon={icons.profile}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

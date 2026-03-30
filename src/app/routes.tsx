import { createBrowserRouter } from "react-router";
import CameraScreen from "./pages/CameraScreen";
import HomeScreen from "./pages/HomeScreen";
import SearchScreen from "./pages/SearchScreen";
import ImageDetailScreen from "./pages/ImageDetailScreen";
import VaultsScreen from "./pages/VaultsScreen";
import CleanupScreen from "./pages/CleanupScreen";
import SettingsScreen from "./pages/SettingsScreen";
import NotificationSetupScreen from "./pages/NotificationSetupScreen";
import AnnotateScreen from "./pages/AnnotateScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: CameraScreen,
  },
  {
    path: "/home",
    Component: HomeScreen,
  },
  {
    path: "/search",
    Component: SearchScreen,
  },
  {
    path: "/image/:id",
    Component: ImageDetailScreen,
  },
  {
    path: "/vaults",
    Component: VaultsScreen,
  },
  {
    path: "/cleanup",
    Component: CleanupScreen,
  },
  {
    path: "/settings",
    Component: SettingsScreen,
  },
  {
    path: "/notifications",
    Component: NotificationSetupScreen,
  },
  {
    path: "/annotate/:id",
    Component: AnnotateScreen,
  },
]);

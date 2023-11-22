import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  Button,
  IconButton,
  Input,
  Switch,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import {
  useMaterialTailwindController,
  setOpenConfigurator,
  setMainColor,
  setSidenavType,
  setFixedNavbar,
} from "@/context";
export function Configurator() {
  const [botName, setBotName] = useState("");
  const [botDescription, setBotDescription] = useState("");
  const [controller, dispatch] = useMaterialTailwindController();
  const { openConfigurator, mainColor, sidenavType, fixedNavbar } = controller;

  const mainColors = {
    blue: "from-blue-400 to-blue-600",
    "blue-gray": "from-blue-gray-800 to-blue-gray-900",
    green: "from-green-400 to-green-600",
    orange: "from-orange-400 to-orange-600",
    red: "from-red-400 to-red-600",
    pink: "from-pink-400 to-pink-600",
  };

  const handleBotName = () => {
    console.log(botName);
  }

  return (
    <aside
      className={`fixed top-0 right-0 z-50 h-screen w-96 bg-white px-2.5 shadow-lg transition-transform duration-300 ${openConfigurator ? "translate-x-0" : "translate-x-96"
        }`}
    >
      <div className="flex items-start justify-between px-6 pt-8 pb-6">
        <div>
          <Typography variant="h5" color="blue-gray">
            Dashboard Configurator
          </Typography>
          <Typography className="font-normal text-blue-gray-600">
            See our dashboard options.
          </Typography>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          onClick={() => setOpenConfigurator(dispatch, false)}
        >
          <XMarkIcon strokeWidth={2.5} className="h-5 w-5" />
        </IconButton>
      </div>
      <div className="pb-4 px-6">
        <div className="mb-6">
          <Typography variant="h6" color="blue-gray">
            Main Colors
          </Typography>
          <div className="mt-3 flex items-center gap-2">
            {Object.keys(mainColors).map((color) => (
              <span
                key={color}
                className={`h-6 w-6 cursor-pointer rounded-full border bg-gradient-to-br transition-transform hover:scale-105 ${mainColors[color]
                  } ${mainColor === color ? "border-black" : "border-transparent"
                  }`}
                onClick={() => setMainColor(dispatch, color)}
              />
            ))}
          </div>
        </div>
        <div className="mb-6">
          <Typography variant="h6" color="blue-gray">
            Assistant Name
          </Typography>
          <div className="mt-3 flex items-center gap-2">
            <Input
              type="text"
              label="Assistant Name"
              size="lg"
              value={botName}
              onChange={e => setBotName(e.target.value)}
              onKeyDown={e => e.keyCode == 13 ? handleBotName(e, "") : ""}
            />
          </div>
        </div>
        <div className="mb-6">
          <Typography variant="h6" color="blue-gray">
            Assistant Description
          </Typography>
          <div className="mt-3 flex items-center gap-2">
            <Textarea
              type="text"
              label="Assistant Description"
              size="lg"
              value={botDescription}
              onChange={e => setBotDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-6">
          <Typography variant="h6" color="blue-gray">
            Sidenav Types
          </Typography>
          <Typography variant="small" color="gray">
            Choose between 3 different sidenav types.
          </Typography>
          <div className="mt-3 flex items-center gap-2">
            <Button
              variant={sidenavType === "dark" ? "gradient" : "outlined"}
              onClick={() => setSidenavType(dispatch, "dark")}
            >
              Dark
            </Button>
            <Button
              variant={sidenavType === "transparent" ? "gradient" : "outlined"}
              onClick={() => setSidenavType(dispatch, "transparent")}
            >
              Transparent
            </Button>
            <Button
              variant={sidenavType === "white" ? "gradient" : "outlined"}
              onClick={() => setSidenavType(dispatch, "white")}
            >
              White
            </Button>
          </div>
        </div>
        <div className="mb-6">
          <hr />
          <div className="flex items-center justify-between py-5">
            <Typography variant="h6" color="blue-gray">
              Navbar Fixed
            </Typography>
            <Switch
              id="navbar-fixed"
              value={fixedNavbar}
              onChange={() => setFixedNavbar(dispatch, !fixedNavbar)}
            />
          </div>
          <hr />
        </div>
      </div>
    </aside>
  );
}

Configurator.displayName = "/src/widgets/layout/configurator.jsx";

export default Configurator;

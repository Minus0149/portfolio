import { ISkill } from "@hooks/type";
import React, { FunctionComponent } from "react";

const Bar: FunctionComponent<{ data: ISkill }> = ({
  data: { Icon, Level, Name },
}) => {
  return (
    <div className="my-2 text-white rounded-full bg-slate-300">
      <div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-blue-700 to-teal-400 "
        style={{
          width: `${Level}%`,
        }}
      >
        <Icon className="mr-3" />
        {Name}
      </div>
    </div>
  );
};

export default Bar;

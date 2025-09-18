import React from "react";

function HorizontalTabs({ tabs, selectedTab, setSelectedTab }) {
  return (
    <div className="flex justify-center mb-12">
      {/* Mobile: 4 top + 3 bottom | Desktop: inline-flex */}
      <div className="bg-white rounded-xl shadow-lg border border-primary/10 p-2 grid grid-cols-4 gap-2 md:inline-flex md:gap-0">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => setSelectedTab(tab.id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 font-montserrat text-center col-span-2 ${
              selectedTab === tab.id
                ? "bg-primary/90 text-white shadow-md"
                : "text-primary/60 hover:bg-primary/10"
            }`}
          >
            <span>{tab.name}</span>
            <span
              className={`ml-2 text-xs px-2 py-1 rounded-full ${
                selectedTab === tab.id
                  ? "bg-gray-100 text-primary"
                  : "bg-primary/10 text-primary/90"
              }`}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default HorizontalTabs;

import { useEffect, useState } from "react";

export const useIsMultipleTabs = () => {
    const [isMultipleTabs, setIsMultipleTabs] = useState<boolean>(false);
    const [isCurrentTabActive, setIsCurrentTabActive] = useState<boolean>(true);

    useEffect(() => {
        const tabId = Date.now().toString(); // id вкладки
        const storageKey = "openTabs";

        const updateTabs = (action: "add" | "remove") => {
            const tabs = JSON.parse(localStorage.getItem(storageKey) || "[]");

            if (action === "add") {
                tabs.push(tabId);
            } else {
                const index = tabs.indexOf(tabId);
                if (index !== -1) {
                    tabs.splice(index, 1);
                }
            }

            localStorage.setItem(storageKey, JSON.stringify(tabs));
        };

        const checkTabs = () => {
            const tabs = JSON.parse(localStorage.getItem(storageKey) || "[]");
            // Если есть другие вкладки, но текущая активна — не показываем модальное окно
            const isCurrentTabStillActive = tabs[tabs.length - 1] === tabId;
            setIsCurrentTabActive(isCurrentTabStillActive);
            setIsMultipleTabs(tabs.length > 1);
        };

        updateTabs("add");

        const handleStorage = (event: StorageEvent) => {
            if (event.key === storageKey) {
                checkTabs();
            }
        };

        window.addEventListener("storage", handleStorage);
        window.addEventListener("beforeunload", () => updateTabs("remove"));

        checkTabs();

        return () => {
            updateTabs("remove");
            window.removeEventListener("storage", handleStorage);
            window.removeEventListener("beforeunload", () =>
                updateTabs("remove")
            );
        };
    }, []);

    return { isMultipleTabs, isCurrentTabActive };
};

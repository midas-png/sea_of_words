import { useEffect, useState } from "react";

export const useIsMultipleTabs = (): boolean => {
    const [isMultipleTabs, setIsMultipleTabs] = useState<boolean>(false);

    useEffect(() => {
        const tabId = Date.now().toString(); // Уникальный идентификатор вкладки

        const updateTabs = (action: "add" | "remove") => {
            const tabs = localStorage.getItem("openTabs")
                ? JSON.parse(localStorage.getItem("openTabs") as string)
                : [];

            if (action === "add") {
                tabs.push(tabId); // Добавляем текущую вкладку
            } else {
                const index = tabs.indexOf(tabId);
                if (index !== -1) {
                    tabs.splice(index, 1); // Удаляем текущую вкладку
                }
            }

            localStorage.setItem("openTabs", JSON.stringify(tabs));
        };

        // Добавляем текущую вкладку в список при загрузке
        updateTabs("add");

        // Проверяем количество открытых вкладок
        const checkTabs = () => {
            const tabs = localStorage.getItem("openTabs")
                ? JSON.parse(localStorage.getItem("openTabs") as string)
                : [];
            setIsMultipleTabs(tabs.length > 1); // Если вкладок больше одной, то устанавливаем true
        };

        // Обрабатываем изменения в localStorage
        const handleStorage = (event: StorageEvent) => {
            if (event.key === "openTabs") {
                checkTabs(); // Проверяем количество вкладок
            }
        };

        window.addEventListener("storage", handleStorage);
        window.addEventListener("beforeunload", () => updateTabs("remove")); // Удаляем вкладку при закрытии

        // Проверяем состояние при первой загрузке
        checkTabs();

        return () => {
            updateTabs("remove"); // Удаляем вкладку при размонтировании компонента
            window.removeEventListener("storage", handleStorage);
            window.removeEventListener("beforeunload", () =>
                updateTabs("remove")
            );
        };
    }, []);

    return isMultipleTabs;
};

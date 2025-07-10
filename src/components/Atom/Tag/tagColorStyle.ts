const TAG_COLOR_STYLE = {
    primary: {
        filled: {
            backgroundColor: "#1994FC14",
            color: "#1994FC",
            iconColor: "1994FC", // 新增 Icon 顏色
            border: "none",
            "&:hover": { backgroundColor: "#1994FC14" },
            borderRadius: "8px",
        },
        outlined: {
            backgroundColor: "#1994FC14",
            color: "#0F62A8",
            iconColor: "1994FC", // 新增 Icon 顏色
            border: "1px solid #47A9FD",
            "&&:hover": { backgroundColor: "#1994FC14" },
            borderRadius: "8px",
        },
    },
    neutral: {
        filled: {
            backgroundColor: "#E1E1E1",
            color: "#373737",
            iconColor: "#373737", // 新增 Icon 顏色
            border: "none",
            "&:hover": { backgroundColor: "#E1E1E1" },
            borderRadius: "8px",
        },
        outlined: {
            backgroundColor: "transparent",
            color: "#373737",
            iconColor: "#373737", // 新增 Icon 顏色
            border: "1px solid #E1E1E1",
            "&&:hover": { backgroundColor: "transparent" },
            borderRadius: "8px",
        },
    },
    warning: {
        filled: {
            backgroundColor: "#FFF8EC",
            color: "#B88900",
            iconColor: "#B88900", // 新增 Icon 顏色
            border: "none",
            "&:hover": { backgroundColor: "#FFF8EC" },
            borderRadius: "8px",
        },
        outlined: {
            backgroundColor: "#FFF8EC",
            color: "#644006",
            iconColor: "#FFB53F", // 新增 Icon 顏色
            border: "1px solid #FFC465",
            "&&:hover": { backgroundColor: "#FFF8EC" },
            borderRadius: "8px",
        },
    },
    danger: {
        filled: {
            backgroundColor: "#FFEDED",
            color: "#FF4D4F",
            iconColor: "#FF4D4F", // 新增 Icon 顏色
            border: "none",
            "&:hover": { backgroundColor: "#FFEDED" },
            borderRadius: "8px",
        },
        outlined: {
            backgroundColor: "#FFEDED",
            color: "#3A0808",
            iconColor: "#FF4D4F", // 新增 Icon 顏色
            border: "1px solid #FF7172",
            "&&:hover": { backgroundColor: "#FFEDED" },
            borderRadius: "8px",
        },
    },
    success: {
        filled: {
            backgroundColor: "#E9FAF5",
            color: "#1AA27A",
            iconColor: "#1AA27A", // 新增 Icon 顏色
            border: "none",
            "&:hover": { backgroundColor: "#E9FAF5" },
            borderRadius: "8px",
        },
        outlined: {
            backgroundColor: "#E9FAF5",
            color: "#072E23",
            iconColor: "#20C997", // 新增 Icon 顏色
            border: "1px solid #4DD4AC",
            "&&:hover": { backgroundColor: "#E9FAF5" },
            borderRadius: "8px",
        },
    },
};

export default TAG_COLOR_STYLE;

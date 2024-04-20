import "./testTitle.css";

interface ITestTitleProps {
    title: string | undefined;
    children?: React.ReactNode;
    tag?: "h1" | "h2";
}
function TestTitle({ title, children, tag }: ITestTitleProps) {
    const Tag = tag || "h2";
    return (
        <div className="testTitle">
            <Tag className="testTitle__title">{title}</Tag>
            {children}
        </div>
    );
}

export default TestTitle;

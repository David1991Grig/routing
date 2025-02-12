const Text = ({children}: {children: string}) => {
    return (
        <p className={'text-[2em] tracking-[.2em] leading-[1.5] text-justify p-[.2em]'}>
            {children}
        </p>
    );
};

export default Text;
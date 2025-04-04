export const getBgColor = (): string => {
    const colors: string[] = ['bg-orange-700', 'bg-emerald-700', 'bg-sky-700', 'bg-rose-700', 'bg-slate-700'];
    const colorIndex = Math.floor(Math.random() * colors.length)
    return colors[colorIndex];
}
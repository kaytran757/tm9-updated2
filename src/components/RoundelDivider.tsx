import patternRingsGold from '@/assets/images/hoavan/pattern-rings-soft.svg';

export default function RoundelDivider() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[400px] overflow-hidden"
      style={{
        backgroundImage: `url(${patternRingsGold})`,
        backgroundRepeat: 'repeat-x',
        backgroundSize: '516px 400px',
        backgroundPosition: 'center bottom',
      }}
      aria-hidden="true"
    />
  );
}

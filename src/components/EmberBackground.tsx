const embers = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  left: `${(index * 23) % 100}%`,
  delay: `${(index % 9) * 0.75}s`,
  duration: `${8 + (index % 7)}s`,
  scale: 0.55 + (index % 5) * 0.18,
}));

export function EmberBackground() {
  return (
    <div className="ember-field" aria-hidden="true">
      {embers.map((ember) => (
        <span
          key={ember.id}
          className="ember"
          style={{
            left: ember.left,
            animationDelay: ember.delay,
            animationDuration: ember.duration,
            transform: `scale(${ember.scale})`,
          }}
        />
      ))}
    </div>
  );
}

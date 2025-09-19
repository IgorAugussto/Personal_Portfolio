export function Footer() {
  return (
    <footer className="py-8 px-4 bg-secondary/20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <p className="text-sm text-muted-foreground">
              © 2025 Igor Augusto. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
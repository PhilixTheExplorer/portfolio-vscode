function SettingsPage() {
  return (
    <div className="flex items-center justify-center h-3/4">
      <div className="text-center">
        <p className="text-blue-500 uppercase">Settings</p>
        <p>Other Stuffs Coming Soon...</p>
        <p>
          <p>This portfolio is developed using </p>
          <p className="text-blue-500">React + Vite</p>
          <p>Inspired by</p>
          <a
            className="text-blue-500"
            href="https://vscode-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            VS Code Portfolio (Next.js) by Nitin Ranganath
          </a>
        </p>
      </div>
    </div>
  );
}

export default SettingsPage;

const sidebarItems = [
    { icon: "icons/home.svg", label: "Home" },
    { icon: "icons/explore.svg", label: "Explore" },
    { icon: "icons/subscriptions.svg", label: "Subscriptions" },
    { icon: "icons/originals.svg", label: "Originals" },
    { icon: "icons/youtube-music.svg", label: "YouTube Music" },
    { icon: "icons/library.svg", label: "Library" }
  ];
  
  const sidebarContainer = document.querySelector('.sidebar');
  
  sidebarItems.forEach(item => {
    const sidebarLink = document.createElement('div');
    sidebarLink.classList.add('sidebar-link');
    
    const img = document.createElement('img');
    img.src = item.icon;
    
    const text = document.createElement('div');
    text.textContent = item.label;
    
    sidebarLink.appendChild(img);
    sidebarLink.appendChild(text);
    
    sidebarContainer.appendChild(sidebarLink);
  });
  
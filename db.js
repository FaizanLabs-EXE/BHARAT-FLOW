const DB = (() => {
  const NAME='bharatflow-db', VERSION=1, STORES=['tasks','expenses','notes','settings','chats'];
  let db;
  const open=()=>new Promise((resolve,reject)=>{const r=indexedDB.open(NAME,VERSION);r.onupgradeneeded=()=>STORES.forEach(s=>{if(!r.result.objectStoreNames.contains(s))r.result.createObjectStore(s,{keyPath:'id'})});r.onsuccess=()=>{db=r.result;resolve(db)};r.onerror=()=>reject(r.error)});
  const store=async(name,mode='readonly')=>(db||await open()).transaction(name,mode).objectStore(name);
  const request=r=>new Promise((resolve,reject)=>{r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error)});
  return {
    open,
    all:async s=>request((await store(s)).getAll()),
    get:async(s,id)=>request((await store(s)).get(id)),
    put:async(s,v)=>request((await store(s,'readwrite')).put(v)),
    del:async(s,id)=>request((await store(s,'readwrite')).delete(id)),
    clear:async s=>request((await store(s,'readwrite')).clear()),
    export:async()=>Object.fromEntries(await Promise.all(STORES.map(async s=>[s,await request((await store(s)).getAll())]))),
    import:async data=>{for(const s of STORES){if(!Array.isArray(data[s]))continue;await request((await store(s,'readwrite')).clear());for(const v of data[s])await request((await store(s,'readwrite')).put(v));}}
  };
})();

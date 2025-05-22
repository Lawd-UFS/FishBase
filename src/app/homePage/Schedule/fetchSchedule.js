export async function fetchSchedule() {
  try {
    const res = await fetch(
      'https://fishbase-backend.onrender.com/programming',
      {
        cache: 'no-store',
      }
    );
    if (!res.ok) return [];
    const json = await res.json();
    return json.success ? json.data : [];
  } catch (error) {
    console.error('Erro ao buscar programação:', error);
    return [];
  }
}

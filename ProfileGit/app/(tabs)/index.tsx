import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import { Linking, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const isWide = width >= 1000;
  const readmeHeadingStyle = isWide ? styles.readmeTitleWide : styles.readmeTitleCompact;
  const readmeBodyStyle = isWide ? styles.readmeBodyWide : styles.readmeBodyCompact;
  const sectionTitleStyle = isWide ? styles.sectionTitleWide : styles.sectionTitleCompact;
  const emailStyle = isWide ? styles.emailTextWide : styles.emailTextCompact;

  const contributionWeeks = 52;
  const contributionDays = 7;

  const contributionLevel = (week: number, day: number) => {
    if ((week + day) % 9 === 0) return 4;
    if ((week * 3 + day) % 7 === 0) return 3;
    if ((week + day * 2) % 5 === 0) return 2;
    if ((week + day) % 3 === 0) return 1;
    return 0;
  };

  const openLink = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    }
  };

  return (
    <View style={styles.screen}>
      <StatusBar style="light" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={[styles.page, isWide && styles.pageWide]}>
          <View style={[styles.profilePanel, isWide && styles.profilePanelWide]}>
            <Image
              source={{ uri: 'https://github.com/CristhianHatzman.png' }}
              style={styles.avatar}
              contentFit="cover"
            />

            <Text style={styles.fullName}>Cristhian Hatzman Trigo</Text>
            <Text style={styles.username}>CristhianHatzman</Text>
            <Text style={styles.role}>Full Stack Developer.</Text>

            <Pressable style={styles.editButton}>
              <Text style={styles.editButtonText}>Edit profile</Text>
            </Pressable>

            <View style={styles.followRow}>
              <Ionicons name="people-outline" size={16} color="#8b949e" />
              <Text style={styles.followText}>25 followers - 34 following</Text>
            </View>

            <View style={styles.metaRow}>
              <Ionicons name="briefcase-outline" size={16} color="#8b949e" />
              <Text style={styles.metaText}>Echad Digital</Text>
            </View>

            <View style={styles.metaRow}>
              <Ionicons name="location-outline" size={16} color="#8b949e" />
              <Text style={styles.metaText}>Sao Paulo</Text>
            </View>

            <View style={styles.metaRow}>
              <Ionicons name="camera-outline" size={16} color="#8b949e" />
              <Text style={styles.metaText}>cris.hatz</Text>
            </View>

            <View style={styles.metaRow}>
              <Ionicons name="logo-linkedin" size={16} color="#8b949e" />
              <Text style={styles.metaText}>in/cristhianhatzman</Text>
            </View>

            <View style={styles.profileDivider} />

            <Text style={styles.sidebarTitle}>Achievements</Text>
            <View style={styles.achievementBadge}>
              <Ionicons name="fish-outline" size={38} color="#d2a8ff" />
            </View>

            <View style={styles.profileDivider} />

            <Text style={styles.sidebarTitle}>Highlights</Text>
            <View style={styles.highlightPill}>
              <Ionicons name="star-outline" size={14} color="#8b949e" />
              <Text style={styles.highlightText}>PRO</Text>
            </View>

            <View style={styles.profileDivider} />

            <Text style={styles.sidebarTitle}>Organizations</Text>
            <View style={styles.orgsRow}>
              <View style={[styles.orgBadge, { backgroundColor: '#7ee787' }]}>
                <Text style={styles.orgBadgeText}>F</Text>
              </View>
              <View style={[styles.orgBadge, { backgroundColor: '#2ea043' }]}>
                <Text style={styles.orgBadgeText}>E</Text>
              </View>
              <View style={[styles.orgBadge, { backgroundColor: '#d0d7de' }]}>
                <Text style={styles.orgBadgeTextDark}>F</Text>
              </View>
              <View style={[styles.orgBadge, { backgroundColor: '#58a6ff' }]}>
                <Text style={styles.orgBadgeText}>C</Text>
              </View>
              <View style={[styles.orgBadge, { backgroundColor: '#f0f6fc' }]}>
                <Text style={styles.orgBadgeTextDark}>R</Text>
              </View>
            </View>
          </View>

          <View style={styles.mainPanel}>
            <View style={styles.readmeCard}>
              <Text style={styles.readmeRepo}>CristhianHatzman / README.md</Text>

              <Text style={[styles.readmeTitle, readmeHeadingStyle]}>Ola! Sou o Cristhian Hatzman Trigo</Text>

              <View style={styles.separator} />

              <Text style={[styles.readmeBody, readmeBodyStyle]}>
                Estudante de Desenvolvimento de Software pela FATEC de Registro.
              </Text>

              <Text style={[styles.readmeBody, readmeBodyStyle]}>
                Atualmente estou atuando como Freelancer em projetos.
              </Text>

              <Text style={[styles.sectionTitle, sectionTitleStyle]}>Entre em contato comigo:</Text>

              <View style={styles.contactRow}>
                <Pressable onPress={() => openLink('https://www.linkedin.com/in/cristhianhatzman/')}>
                  <FontAwesome name="linkedin-square" size={42} color="#2f81f7" />
                </Pressable>

                <Pressable onPress={() => openLink('https://instagram.com/cris.hatz')}>
                  <Ionicons name="logo-instagram" size={42} color="#f778ba" />
                </Pressable>
              </View>

              <Text style={[styles.emailText, emailStyle]}>Email: cristhianhatzman@gmail.com</Text>
            </View>

            <Text style={styles.pinnedTitle}>Pinned</Text>

            <View style={[styles.repoGrid, isWide && styles.repoGridWide]}>
              <View style={[styles.repoCard, isWide && styles.repoCardWide]}>
                <View style={styles.repoHeader}>
                  <MaterialCommunityIcons name="source-repository" size={18} color="#8b949e" />
                  <Text style={styles.repoName}>api-presidentes-do-brasil</Text>
                  <Text style={styles.publicPill}>Public</Text>
                </View>
                <Text style={styles.repoDescription}>
                  API REST desenvolvida em Node.js com Express.js, organizada em arquitetura MVC, com
                  autenticacao via JWT e persistencia de dados em MongoDB utilizando Mongoose.
                </Text>
                <View style={styles.languageRow}>
                  <View style={styles.languageDot} />
                  <Text style={styles.languageText}>JavaScript</Text>
                </View>
              </View>

              <View style={[styles.repoCard, isWide && styles.repoCardWide]}>
                <View style={styles.repoHeader}>
                  <MaterialCommunityIcons name="source-repository" size={18} color="#8b949e" />
                  <Text style={styles.repoName}>sistema-loja-nodejs</Text>
                  <Text style={styles.publicPill}>Public</Text>
                </View>
                <Text style={styles.repoDescription}>
                  Sistema CRUD com foco em back-end para gerenciamento de lojas e controle de estoque,
                  simulando a administracao completa de uma loja virtual com rotas e operacoes.
                </Text>
                <View style={styles.languageRow}>
                  <View style={styles.languageDot} />
                  <Text style={styles.languageText}>JavaScript</Text>
                </View>
              </View>

              <View style={[styles.repoCard, isWide && styles.repoCardWide]}>
                <View style={styles.repoHeader}>
                  <MaterialCommunityIcons name="source-repository" size={18} color="#8b949e" />
                  <Text style={styles.repoName}>bubatag-crud-express-js</Text>
                  <Text style={styles.publicPill}>Public</Text>
                </View>
                <Text style={styles.repoDescription}>
                  Projeto desenvolvido para o Projeto Integrador da Fatec Registro. O Bubatag e um
                  sistema web CRUD construido com Node.js, utilizando Express.js, EJS e Sequelize para
                  gerenciar dados com MySQL.
                </Text>
                <View style={styles.languageRow}>
                  <View style={[styles.languageDot, { backgroundColor: '#db61a2' }]} />
                  <Text style={styles.languageText}>EJS</Text>
                </View>
              </View>
            </View>

            <View style={styles.contributionsSection}>
              <View style={styles.contributionsHeaderRow}>
                <Text style={styles.contributionsTitle}>837 contributions in the last year</Text>
                <Text style={styles.settingsText}>Contribution settings</Text>
              </View>

              <View style={[styles.contributionsLayout, isWide && styles.contributionsLayoutWide]}>
                <View style={styles.contributionsCard}>
                  <View style={styles.monthLabels}>
                    <Text style={styles.monthText}>Apr</Text>
                    <Text style={styles.monthText}>May</Text>
                    <Text style={styles.monthText}>Jun</Text>
                    <Text style={styles.monthText}>Jul</Text>
                    <Text style={styles.monthText}>Aug</Text>
                    <Text style={styles.monthText}>Sep</Text>
                    <Text style={styles.monthText}>Oct</Text>
                    <Text style={styles.monthText}>Nov</Text>
                    <Text style={styles.monthText}>Dec</Text>
                    <Text style={styles.monthText}>Jan</Text>
                    <Text style={styles.monthText}>Feb</Text>
                    <Text style={styles.monthText}>Mar</Text>
                    <Text style={styles.monthText}>Apr</Text>
                  </View>

                  <View style={styles.heatmapWrap}>
                    <View style={styles.daysLabels}>
                      <Text style={styles.dayText}>Mon</Text>
                      <Text style={styles.dayText}>Wed</Text>
                      <Text style={styles.dayText}>Fri</Text>
                    </View>

                    <View style={styles.heatmapGrid}>
                      {Array.from({ length: contributionWeeks }).map((_, week) => (
                        <View key={`week-${week}`} style={styles.heatmapColumn}>
                          {Array.from({ length: contributionDays }).map((__, day) => {
                            const level = contributionLevel(week, day);
                            const colors = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];
                            return (
                              <View
                                key={`day-${week}-${day}`}
                                style={[styles.heatCell, { backgroundColor: colors[level] }]}
                              />
                            );
                          })}
                        </View>
                      ))}
                    </View>
                  </View>

                  <View style={styles.legendRow}>
                    <Text style={styles.legendText}>Learn how we count contributions</Text>
                    <View style={styles.scaleRow}>
                      <Text style={styles.legendText}>Less</Text>
                      <View style={[styles.heatCell, { backgroundColor: '#161b22' }]} />
                      <View style={[styles.heatCell, { backgroundColor: '#0e4429' }]} />
                      <View style={[styles.heatCell, { backgroundColor: '#006d32' }]} />
                      <View style={[styles.heatCell, { backgroundColor: '#26a641' }]} />
                      <View style={[styles.heatCell, { backgroundColor: '#39d353' }]} />
                      <Text style={styles.legendText}>More</Text>
                    </View>
                  </View>
                </View>

                <View style={[styles.yearsColumn, !isWide && styles.yearsColumnCompact]}>
                  <View style={styles.activeYearBadge}>
                    <Text style={styles.activeYearText}>2026</Text>
                  </View>
                  <Text style={styles.yearText}>2025</Text>
                  <Text style={styles.yearText}>2024</Text>
                  <Text style={styles.yearText}>2023</Text>
                  <Text style={styles.yearText}>2022</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#0d1117',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  page: {
    width: '100%',
    maxWidth: 1200,
    alignSelf: 'center',
    gap: 24,
  },
  pageWide: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  profilePanel: {
    width: '100%',
    gap: 10,
    alignItems: 'center',
  },
  profilePanelWide: {
    width: 300,
  },
  mainPanel: {
    flex: 1,
    gap: 16,
  },
  avatar: {
    width: 240,
    height: 240,
    borderRadius: 120,
    borderWidth: 1,
    borderColor: '#30363d',
  },
  fullName: {
    color: '#f0f6fc',
    fontSize: 34,
    fontWeight: '700',
    lineHeight: 38,
    marginTop: 8,
    textAlign: 'center',
  },
  username: {
    color: '#8b949e',
    fontSize: 28,
    fontWeight: '300',
    marginBottom: 8,
    textAlign: 'center',
  },
  role: {
    color: '#c9d1d9',
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 10,
    textAlign: 'center',
  },
  editButton: {
    width: '100%',
    maxWidth: 320,
    borderWidth: 1,
    borderColor: '#30363d',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#212830',
    marginBottom: 10,
  },
  editButtonText: {
    color: '#f0f6fc',
    fontSize: 18,
    fontWeight: '600',
  },
  followRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginBottom: 8,
  },
  followText: {
    color: '#c9d1d9',
    fontSize: 19,
  },
  metaRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 6,
  },
  metaText: {
    color: '#c9d1d9',
    fontSize: 18,
  },
  profileDivider: {
    width: '100%',
    height: 1,
    backgroundColor: '#30363d',
    marginVertical: 10,
  },
  sidebarTitle: {
    width: '100%',
    color: '#f0f6fc',
    fontSize: 34,
    fontWeight: '700',
    textAlign: 'left',
  },
  achievementBadge: {
    width: 78,
    height: 78,
    borderRadius: 39,
    borderWidth: 3,
    borderColor: '#f0f6fc',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1f6feb22',
    alignSelf: 'flex-start',
  },
  highlightPill: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#8250df',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  highlightText: {
    color: '#a371f7',
    fontSize: 19,
    fontWeight: '700',
  },
  orgsRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  orgBadge: {
    width: 42,
    height: 42,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#30363d',
  },
  orgBadgeText: {
    color: '#0d1117',
    fontSize: 18,
    fontWeight: '800',
  },
  orgBadgeTextDark: {
    color: '#24292f',
    fontSize: 18,
    fontWeight: '800',
  },
  readmeCard: {
    borderWidth: 1,
    borderColor: '#30363d',
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#0d1117',
    gap: 14,
    alignItems: 'center',
  },
  readmeRepo: {
    color: '#8b949e',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  readmeTitle: {
    color: '#f0f6fc',
    fontWeight: '800',
    marginTop: 4,
    textAlign: 'center',
  },
  readmeTitleCompact: {
    fontSize: 30,
    lineHeight: 36,
  },
  readmeTitleWide: {
    fontSize: 52,
    lineHeight: 58,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#30363d',
    marginVertical: 2,
  },
  readmeBody: {
    color: '#c9d1d9',
    fontWeight: '700',
    textAlign: 'center',
  },
  readmeBodyCompact: {
    fontSize: 19,
    lineHeight: 27,
  },
  readmeBodyWide: {
    fontSize: 33,
    lineHeight: 44,
  },
  sectionTitle: {
    color: '#f0f6fc',
    fontWeight: '700',
    marginTop: 8,
    textAlign: 'center',
  },
  sectionTitleCompact: {
    fontSize: 24,
  },
  sectionTitleWide: {
    fontSize: 40,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },
  emailText: {
    color: '#f0f6fc',
    textAlign: 'center',
  },
  emailTextCompact: {
    fontSize: 18,
    lineHeight: 24,
  },
  emailTextWide: {
    fontSize: 31,
    lineHeight: 36,
  },
  pinnedTitle: {
    color: '#f0f6fc',
    fontSize: 34,
    fontWeight: '700',
    marginTop: 8,
    textAlign: 'center',
  },
  repoGrid: {
    flexDirection: 'column',
    gap: 16,
  },
  repoGridWide: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  repoCard: {
    borderWidth: 1,
    borderColor: '#30363d',
    borderRadius: 10,
    padding: 16,
    backgroundColor: '#0d1117',
    gap: 12,
  },
  repoCardWide: {
    width: '48.5%',
  },
  repoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  repoName: {
    color: '#58a6ff',
    fontSize: 21,
    fontWeight: '700',
    flex: 1,
  },
  publicPill: {
    borderWidth: 1,
    borderColor: '#30363d',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 2,
    color: '#8b949e',
    fontSize: 15,
    fontWeight: '600',
  },
  repoDescription: {
    color: '#8b949e',
    fontSize: 20,
    lineHeight: 29,
  },
  languageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  languageDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#f1e05a',
  },
  languageText: {
    color: '#c9d1d9',
    fontSize: 19,
  },
  contributionsSection: {
    marginTop: 24,
    gap: 12,
  },
  contributionsHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    flexWrap: 'wrap',
  },
  contributionsTitle: {
    color: '#f0f6fc',
    fontSize: 36,
    fontWeight: '700',
  },
  settingsText: {
    color: '#8b949e',
    fontSize: 24,
  },
  contributionsLayout: {
    gap: 12,
  },
  contributionsLayoutWide: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  contributionsCard: {
    borderWidth: 1,
    borderColor: '#30363d',
    borderRadius: 10,
    padding: 14,
    backgroundColor: '#0d1117',
    flex: 1,
    minWidth: 0,
  },
  monthLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingLeft: 34,
  },
  monthText: {
    color: '#c9d1d9',
    fontSize: 13,
    flex: 1,
  },
  heatmapWrap: {
    flexDirection: 'row',
    gap: 8,
  },
  daysLabels: {
    justifyContent: 'space-between',
    paddingVertical: 2,
  },
  dayText: {
    color: '#c9d1d9',
    fontSize: 12,
  },
  heatmapGrid: {
    flexDirection: 'row',
    gap: 3,
    flex: 1,
  },
  heatmapColumn: {
    gap: 3,
  },
  heatCell: {
    width: 10,
    height: 10,
    borderRadius: 2,
  },
  legendRow: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 10,
  },
  scaleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  legendText: {
    color: '#8b949e',
    fontSize: 12,
  },
  yearsColumn: {
    minWidth: 92,
    gap: 10,
    alignItems: 'center',
    paddingVertical: 4,
  },
  yearsColumnCompact: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  activeYearBadge: {
    backgroundColor: '#1f6feb',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  activeYearText: {
    color: '#f0f6fc',
    fontSize: 20,
    fontWeight: '600',
  },
  yearText: {
    color: '#8b949e',
    fontSize: 20,
  },
});

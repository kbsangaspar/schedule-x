import { PreactViewComponent } from '../../../types/preact-view-component'
import { WeekWrapper } from '../../week/components/week-wrapper'

export const DayWrapper: PreactViewComponent = ({ $app, id }) => {
  return <WeekWrapper $app={$app} id={id} />
}